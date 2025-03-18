#pragma bank 255

#include <gbdk/platform.h>
#include "vm.h"
#include "parallax.h"

void script_cmd_modify_parallax(SCRIPT_CTX * THIS) OLDCALL BANKED {
	// I'm gonna be honest guys, I can only get this to work with int8_t. 
	// I'm not sure why.
	// Probably ask Toxa in the discord how to do this better, they're a genius
    int8_t layer3Speed = *(int8_t *)VM_REF_TO_PTR(-1);
    THIS->stack_ptr--;
    int8_t layer2Speed = *(int8_t *)VM_REF_TO_PTR(-1);
    THIS->stack_ptr--;
    int8_t layer1Speed = *(int8_t *)VM_REF_TO_PTR(-1);
    THIS->stack_ptr--;

    parallax_rows[0].shift = layer1Speed;
    parallax_rows[1].shift = layer2Speed;
    parallax_rows[2].shift = layer3Speed;
}