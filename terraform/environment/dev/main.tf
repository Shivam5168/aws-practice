provider "azurerm" {
  features {}
}

module "rg" {
  source = "../../modules/resource-group"
  rg_name  = var.rg_name
  location = var.location
}

module "sa" {
  source = "../../modules/storage-account"
  name = "${var.env}sashivamaccount"
  rg_name = module.rg.rg_name
  location = var.location
  account_tier = var.access_tier
  account_replication_type = var.account_replication_type
  }