import {
  bridge_distributorAdminChanged as bridge_distributorAdminChangedEvent,
  bridge_distributorBeaconUpgraded as bridge_distributorBeaconUpgradedEvent,
  bridge_distributorUpgraded as bridge_distributorUpgradedEvent
} from "../generated/bridge_distributor/bridge_distributor"
import {
  bridge_distributorAdminChanged,
  bridge_distributorBeaconUpgraded,
  bridge_distributorUpgraded
} from "../generated/schema"

export function handlebridge_distributorAdminChanged(
  event: bridge_distributorAdminChangedEvent
): void {
  let entity = new bridge_distributorAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handlebridge_distributorBeaconUpgraded(
  event: bridge_distributorBeaconUpgradedEvent
): void {
  let entity = new bridge_distributorBeaconUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beacon = event.params.beacon
  entity.save()
}

export function handlebridge_distributorUpgraded(
  event: bridge_distributorUpgradedEvent
): void {
  let entity = new bridge_distributorUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.implementation = event.params.implementation
  entity.save()
}
