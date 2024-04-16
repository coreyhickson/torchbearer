export default class TorchbearerActorBase extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    // This is the boilerplate fields
    schema.health = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 })
    });
    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 5 })
    });
    schema.biography = new fields.StringField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields

    // These are the Torchbearer fields
    // Who you are
    // Stock, class, age, home, raiment, parents, mentor, friend, enemy, level
    schema.stock = new fields.StringField({blank: true, trim: true});
    schema.class = new fields.StringField({blank: true, trim: true});
    schema.age = new fields.NumberField({min: 0, integer: true, positive: true});
    schema.home = new fields.StringField({blank: true, trim: true});
    schema.raiment = new fields.StringField({blank: true, trim: true});
    schema.parents = new fields.StringField({blank: true, trim: true});
    schema.mentor = new fields.StringField({blank: true, trim: true});
    schema.friend = new fields.StringField({blank: true, trim: true});
    schema.enemy = new fields.StringField({blank: true, trim: true});
    schema.level = new fields.NumberField({min: 0, integer: true, positive: true});

    return schema;
  }
}