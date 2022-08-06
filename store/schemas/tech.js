export default {
    name: 'tech',
    title: 'Tech',
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
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
    ]
}