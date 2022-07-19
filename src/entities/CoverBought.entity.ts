import {BigInt, Bytes, DataSourceContext, Entity, store, Value, ValueKind} from "@graphprotocol/graph-ts/index";

export class CoverBought extends Entity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
        this.set("blockNumber", Value.fromBytes(Bytes.empty()));
        this.set("coverId", Value.fromBigInt(BigInt.zero()));
        this.set("buyer", Value.fromBytes(Bytes.empty()));
        this.set("contractAddress", Value.fromBytes(Bytes.empty()));
        this.set("coverPrice", Value.fromBytes(Bytes.empty()));
        this.set("network", Value.fromBytes(Bytes.empty()));
        this.set("distributor", Value.fromBytes(Bytes.empty()));

    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save CoverBought entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                "Cannot save CoverBought entity with non-string ID. " +
                'Considering using .toHex() to convert the "id" to a string.'
            );
            store.set("CoverBought", id.toString(), this);
        }
    }

    static load(id: string): CoverBought | null {
        return changetype<CoverBought | null>(store.get("CoverBought", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get timestamp(): BigInt {
        let value = this.get("blockNumber");
        return  value!.toBigInt();
    }

    set timestamp(value: BigInt) {
        this.set("blockNumber",  Value.fromBigInt(value));
    }

    get coverId(): BigInt {
        let value = this.get("coverId");
        return value!.toBigInt();
    }

    set coverId(value: BigInt) {
        this.set("coverId", Value.fromBigInt(value));
    }

    get buyer(): Bytes {
        let value = this.get("buyer");
        return value!.toBytes();
    }

    set buyer(value: Bytes) {
        this.set("buyer", Value.fromBytes(value));
    }

    get contractAddress(): Bytes {
        let value = this.get("contractAddress");
        return value!.toBytes();
    }

    set contractAddress(value: Bytes) {
        this.set("contractAddress", Value.fromBytes(value));
    }

    get feePercentage(): BigInt {
        let value = this.get("feePercentage");
        return value!.toBigInt();
    }

    set feePercentage(value: BigInt) {
        this.set("feePercentage", Value.fromBigInt(value));
    }

    get coverPrice(): BigInt {
        let value = this.get("coverPrice");
        return value!.toBigInt();
    }

    set coverPrice(value: BigInt) {
        this.set("coverPrice", Value.fromBigInt(value));
    }

    get network(): string {
        let value = this.get("network");
        return value!.toString();
    }

    set network(value: string) {
        this.set("network", Value.fromString(value));
    }

    get distributor(): Bytes {
        let value = this.get("distributor");
        return value!.toBytes();
    }

    set distributor(value: Bytes) {
        this.set("distributor", Value.fromBytes(value));
    }

}
