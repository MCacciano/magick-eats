const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'bngpe9vx',
  dataset: 'production',
  token:
    'skvEfLk6ESIY4EfoFZY1dcARVzCPLQwRwirKfAmEnxANKyHAAUGgRHQVEjVxpYBX9LWVh3VrJFhwEDIMmPoR2RGE4E0ubypxDUBuGC27PZ1ZwotCWdoWBnjsyVO3JZK3jXmmmIiGOKxXTWjq7N15PKVvIWAReGgREJdk9BYgwOjytjazwQ4E',
  useCdn: false
});

module.exports = client;
