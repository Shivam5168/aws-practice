terraform {
  backend "azurerm" {
    resource_group_name = "rg-storage-remote-backend"
    storage_account_name = "remotebackendrg"
    container_name = "remote-backend"
    key = "dev.tfstate"
  }
}