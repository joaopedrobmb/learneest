exports.up = (pgm) => {
  pgm.createTable("study_sessions", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    subject: {
      type: "varchar(30)",
      notNull: true,
    },

    status: {
      type: "varchar(30)",
      notNull: true,
      default: 'pending',
    },

    scheduled_start: {
      type: "timestamptz",
      notNull: true,
    },

    scheduled_end: {
      type: "timestamptz",
      notNull: true,
    },

    created_at: {
      type: "timestamptz",
      default: pgm.func("timezone('utc', now())"),
      notNull: true,
    },

    updated_at: {
      type: "timestamptz",
      default: pgm.func("timezone('utc', now())"),
      notNull: true,
    },
  });
};

exports.down = false;
