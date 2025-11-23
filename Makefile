.PHONY: build-staging
build-staging:
	docker compose -f docker/staging/compose.yml build

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/compose.yml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/compose.yml down

.PHONY: build-prod
build-prod:
	docker compose -f docker/production/compose.yml build
.PHONY: start-prod
start-prod: ## Start the production docker container.
	docker compose -f docker/production/compose.yml up -d
.PHONY: stop-prod
stop-prod: ## Stop the production docker container.
	docker compose -f docker/production/compose.yml down
