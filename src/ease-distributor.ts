import {
  ease_distributorAdminChanged as ease_distributorAdminChangedEvent,
  ease_distributorBeaconUpgraded as ease_distributorBeaconUpgradedEvent,
  ease_distributorUpgraded as ease_distributorUpgradedEvent
} from "../generated/ease_distributor/ease_distributor"
import {
  ease_distributorAdminChanged,
  ease_distributorBeaconUpgraded,
  ease_distributorUpgraded
} from "../generated/schema"

export function handleease_distributorAdminChanged(
  event: ease_distributorAdminChangedEvent
): void {
  let entity = new ease_distributorAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleease_distributorBeaconUpgraded(
  event: ease_distributorBeaconUpgradedEvent
): void {
  let entity = new ease_distributorBeaconUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beacon = event.params.beacon
  entity.save()
}

export function handleease_distributorUpgraded(
  event: ease_distributorUpgradedEvent
): void {
  let entity = new ease_distributorUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.implementation = event.params.implementation
  entity.save()
}
