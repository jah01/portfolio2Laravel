export COMPOSE_PROJECT_NAME=portfolio

# Laravel Variables
export APP_NAME=portfolio
export APP_ENV=local
export APP_KEY=base64:1cMRlzytI2i8fSPTEZtBQWceBn8T2L21RIRsrGC0v44=
export APP_DEBUG=true
export APP_LOG_LEVEL=debug
export APP_URL=https://$(LOCAL_DOMAIN)
export DB_CONNECTION=pgsql
export DB_HOST=db
export DB_DATABASE=laravel
export DB_USERNAME=laravel
export DB_PASSWORD=laravel
export DB_PORT=5432
export MAIL_DRIVER=smtp
export MAIL_HOST=mailhog
export MAIL_PORT=1025
export MAIL_USERNAME=null
export MAIL_PASSWORD=null
export MAIL_ENCRYPTION=null
export MEMCACHED_HOST=memcached
export CACHE_DRIVER=memcached
export SESSION_DRIVER=memcached

up:
	docker-compose up -d

down:
	docker-compose down

web-shell:
	docker exec -it $(COMPOSE_PROJECT_NAME)_web_1 bash