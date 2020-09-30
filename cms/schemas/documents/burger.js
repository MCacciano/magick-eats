export default {
  title: 'Burger',
  name: 'burger',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'Img',
      name: 'img',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    }
  ]
};
