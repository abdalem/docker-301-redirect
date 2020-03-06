generate-lock-file:
	docker build . -t abdalem/301-redirect
	docker run --rm --entrypoint cat abdalem/301-redirect ./package-lock.json > ./package-lock.json

dev-run: 
	docker-compose -f docker-compose.prod.yml -f docker-compose.dev.yml up

dev-down:	
	docker-compose -f docker-compose.prod.yml -f docker-compose.dev.yml down

prod-run:	
	docker-compose -f docker-compose.prod.yml up -d
