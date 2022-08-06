export default {
    name: 'about',
    title: 'About',
    type : 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        },
    ]
}