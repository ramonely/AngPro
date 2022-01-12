export class Items
{
    ItemName : string;
    Category : string;
    Price : number;

    constructor(itemName : string, category : string, price : number)
    {
            this.ItemName = itemName;
            this.Category = category;
            this.Price = price;
    }
}