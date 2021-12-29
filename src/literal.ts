export {};
type val_name = 'sample' | 'private' | 'public';
type data_type = `${val_name}_data`;
type prop_type = `${val_name}_property`;
type method_type = `${val_name}_method`;

const s: data_type = 'sample_data';
const t: prop_type = 'public_property';
const u: method_type = 'private_method';
//const v: data_type = 'personal_data';
