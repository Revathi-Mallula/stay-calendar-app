# Use an official PHP image with Apache pre-installed
FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    libzip-dev \
    nodejs \
    npm \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl

# Enable Apache mod_rewrite for Laravel
RUN a2enmod rewrite

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Verify Composer installation
RUN composer --version

# Set the working directory
WORKDIR /var/www/html

# Copy all application files into the container
COPY . .

# Configure Git to trust the working directory
RUN git config --global --add safe.directory /var/www/html

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Install Node.js dependencies and build the frontend
RUN npm install
RUN npm run build

# Cache Laravel configurations
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Set permissions for Laravel storage and cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 10000 for Render
EXPOSE 10000

# Start the Laravel application
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]