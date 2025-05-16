import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType} from "sanity";


export const offerType = defineType({
    name: 'offers',
    title: 'Offers',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: 'plname',
            title: 'PL-Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'enname',
            title: 'EN-Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Offer Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'pldescription',
            title: 'PL-Description',
            type: 'blockContent',
           
        }),
        defineField({
            name: 'endescription',
            title: 'EN-Description',
            type: 'blockContent',
           
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Valid From',
            
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Valid Until',
            
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Is Active',
            description: 'Check to activate the sale',
            initialValue: true,
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: Rule => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            title: 'plname',
            media: 'image',
            price: 'price',
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `$${select.price}`,
                media: select.media,
            };
        },
    }
});