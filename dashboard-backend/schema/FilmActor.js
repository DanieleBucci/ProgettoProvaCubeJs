cube(`FilmActor`, {
  sql: `SELECT * FROM public.film_actor`,
  
  joins: {
    Actor: {
      sql: `${CUBE}.actor_id = ${Actor}.actor_id`,
      relationship: `belongsTo`
    },
    
    Film: {
      sql: `${CUBE}.film_id = ${Film}.film_id`,
      relationship: `belongsTo`
    }
  },
  
  
  
  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
