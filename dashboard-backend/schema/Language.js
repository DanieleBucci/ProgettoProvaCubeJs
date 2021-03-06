cube(`Language`, {
  sql: `SELECT * FROM public.language`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, lastUpdate]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
