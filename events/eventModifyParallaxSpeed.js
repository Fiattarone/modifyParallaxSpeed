export const id = "PARALLAX_MODIFY";
export const name = "Modify Parallax Speeds";
export const groups = ["Parallax"];

//////////////////////////////////////////////////////////////////
//  PARALLAX MODIFY EVENT
//////////////////////////////////////////////////////////////////

export const fields = [
  {
    key: "__section",
    type: "tabs",
    defaultValue: "modify",
    variant: "eventSection",
    values: {
      modify: "Modify Parallax",
    },
  },
  {
    type: "group",
    conditions: [{ key: "__section", in: ["modify", undefined] }],
    fields: [
      {
        key: "layer1Speed",
        label: "Layer 1 Speed",
        type: "number",
        defaultValue: 1,
        step: 1,
        min: 0,
        max: 8,
        description: "New speed for layer 1 (0=1x, 1=½x, ..., 8=¹⁄₂₅₆x)",
      },
      {
        key: "layer2Speed",
        label: "Layer 2 Speed",
        type: "number",
        defaultValue: 1,
        step: 1,
        min: 0,
        max: 8,
        description: "New speed for layer 2 (0=1x, 1=½x, ..., 8=¹⁄₂₅₆x)",
      },
      {
        key: "layer3Speed",
        label: "Layer 3 Speed",
        type: "number",
        defaultValue: 1,
        step: 1,
        min: 0,
        max: 8,
        description: "New speed for layer 3 (0=1x, 1=½x, ..., 8=¹⁄₂₅₆x)",
      },
    ],
  },
];

export const compile = (input, helpers) => {
  const { _stackPushConst, _callNative, _stackPop, _addComment, _addNL } =
    helpers;

  _addComment("Modify Parallax Speeds");

  _stackPushConst(input.layer1Speed);
  _stackPushConst(input.layer2Speed);
  _stackPushConst(input.layer3Speed);

  _callNative("script_cmd_modify_parallax");

  _stackPop(3);
  _addNL();
};
