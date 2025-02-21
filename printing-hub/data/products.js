export function getProductByID(id){
    let matchProduct = {};
    for(const product of printingProducts){
        if(product.id === id)
            matchProduct = product;
    }
    return matchProduct;
}

export const printingProducts = [
    {
        id:'abad1e52-dddc-4ceb-b2c4-cddcd910510e',
        title: "paper",
        imageUrl:"product-placeholder.png",
        type:"printing product",
        options:[
            {
                id:"401d13c8-bef4-47a8-ac5e-1d63f43ace6b",
                size: 'A0',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    paperType : ['Normal','White Film'],
                    printColor : ['Black','Colored'],
                    layout : ['1','P2','P4','L2','L4'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2'],
                },
            },
            {
                id:"7594766a-9406-438a-bec8-efbeab689213",
                size: 'A1',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    paperType : ['Normal','White Film'],
                    printColor : ['Black','Colored'],
                    layout : ['1','P2','P4','L2','L4'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2'],
                }
            },
            {
                id:"9c88666c-a904-498b-91d7-92ce9c978d6c",
                size: 'A2',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    pageType : ['Normal','Glossy','Adhesive','Reinforced','White Film'],
                    printColor : ['Black','Colored'],
                    layout : ['1','P2','P4','L2','L4'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2','Option 3','Option 4'],
                },
            },
            {
                id:"4d3d04e6-a011-4c53-bc32-b03eed8140f7",
                size: 'A3',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    pageType : ['Normal','Glossy','Adhesive','Reinforced','White Film'],
                    printColor : ['Black','Colored'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2','option 3'],
                },
            },
            {
                id:"58fdb297-9fbb-4692-b2b1-9cc26467801d",
                size: 'A4',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    pageType : ['Normal','Glossy','Adhesive','Reinforced'],
                    printColor : ['Black','Colored'],
                    layout : ['1','P2','P4','L2','L4'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2'],
                },
            },
            {
                id:"19cff3a4-20c5-44c4-b15f-e828e78a536e",
                size: 'A5',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    pageType : ['Normal','Glossy','Adhesive','Reinforced','Film'],
                    printColor : ['Black','Colored'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2'],
                },
            },
        ]
    },
    {
        id:'ff4a290b-6d54-482e-957c-d0d8fd28eccf',
        title: "cards",
        imageUrl:"product-placeholder.png",
        type:"printing product",
        options:[
            {
                id:"17e1a265-103c-4420-87eb-414d0aaf1f20",
                size: '5.5cm x 8.5cm',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    type : ['Normal','White Film'],
                    printColor : ['Black','Colored'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2'],
                }
            },
            {
                id:"f0074c6e-5081-4e03-ac18-3f37a5d393c9",
                size: '7.4cm x 10.5cm',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    type : ['Normal','White Film'],
                    printColor : ['Black','Colored'],
                    layout : ['1','P2','P4','L2','L4'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2'],
                },
            },
            {
                id:"a0d9a689-076a-43f4-93a9-466c8bc7aec2",
                size: '14.8cm x 10.5cm',
                imageUrl:"product-placeholder.png",
                sizeOptions:{
                    type : ['Normal','Glossy','Adhesive','Reinforced','White Film'],
                    printColor : ['Black','Colored'],
                    printSides : ['Face','Double-Side'],
                    packagingOptions : ['option 1','option 2','Option 3','Option 4'],
                },
            },
        ]
    }
]


