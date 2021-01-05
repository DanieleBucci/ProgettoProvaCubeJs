cube(`Film`, {
  sql: `SELECT * FROM public.film`,
  
  joins: {
    FilmActor: {
      sql: `${CUBE}.film_id = ${FilmActor}.film_id`,
      relationship: `hasMany`
    }
  },
  
  measures: {
    count: {
      sql:`film_id`,
      type: `count`,
      drillMembers: [title, lastUpdate]
    },
    
    rentalDuration: {
      sql: `rental_duration`,
      type: `sum`
    },
    
    replacementCost: {
      sql: `replacement_cost`,
      type: `sum`
    }
  },
  
  dimensions: {
    filmId: { 
      sql: `film_id`,
      type: `number`,
      primaryKey: true,
    },
    
    rating: {
      sql: `rating`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    specialFeatures: {
      sql: `special_features`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    fulltext: {
      sql: `fulltext`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
