cube(`Actor`, {
  sql: `SELECT * FROM public.actor`,
  
  joins: {
    FilmActor: {
      sql: `${CUBE}.actor_id = ${FilmActor}.actor_id`,
      relationship: `hasMany`
    },
  },
  
  measures: {
    count: {
      sql:`actor_id`,
      type: `count`,
      drillMembers: [firstName, lastName, lastUpdate]
    }
  },
  
  dimensions: {

    actorId: { 
      sql: `actor_id`,
      type: `number`,
      primaryKey: true,
    },

    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
