import { createGlobalStyle } from 'styled-components';

const RaceStyling = createGlobalStyle`
  /* * {
    --transition-properties: color, background-color, box-shadow, background-image, border;

    --transition-duration: .15s;
    --transition-time-function: ease-out;

    -webkit-transition-property: var(--transition-properties);
    -moz-transition-property:    var(--transition-properties);
    -o-transition-property:      var(--transition-properties);
    transition-property:         var(--transition-properties);

    -webkit-transition-duration: var(--transition-duration);
    -moz-transition-duration: var(--transition-duration);
    -o-transition-duration: var(--transition-duration);
    transition-duration: var(--transition-duration);

    -webkit-transition-timing-function: var(--transition-time-fuinction);
    -moz-transition-timing-function: var(--transition-time-fuinction);
    -o-transition-timing-function: var(--transition-time-fuinction);
    transition-timing-function: var(--transition-time-fuinction);
  } */

  body {
    --title-fg:               var(--color-bg-primary);
    --title-bg:               var(--color-primary);
    --title-pseudo:           var(--color-bg-primary);
  }

  body.zerg {
    --color-primary:          rgb(177, 122, 204);
    --color-secondary:        rgb(117, 68, 222);
    --color-primary-opacity:  rgba(177, 122, 204, .075);

    --color-bg-primary:       rgb(19, 18, 23);
    --color-bg-secondary:     rgb(32, 22, 50);
    --color-bg-screen:        rgb(29, 26, 38);

    --link-color:             rgb(202, 211, 200);

    --retro-border-color:     rgb(9, 6, 16);
    --retro-shadow:           -2.5px -2.5px var(--retro-border-color)
                              , 2.5px 2.5px var(--retro-border-color);
    --retro-shadow-active:    inset -1.5px -1.5px rgb(9, 6, 16)
                              , inset 2.5px 4px rgb(9, 6, 16);

    --screen-shadow:          rgba(0, 0, 0, .25);

    --neu-shadow-small:
      2px 2px 10px rgba(0, 0, 0, .75),
      -2px -2px 10px rgba(255, 255, 255, .075);
    --neu-shadow-small-active:
      inset 2px 2px 10px rgba(0, 0, 0, .75),
      inset -2px -2px 10px rgba(255, 255, 255, .075);
  }

  /*
   * Styling for 'body' and 'body.terran'.
   * Doing this to make 'terran' the default race.
   * adding the default value in 'useState' has a bit of a delay when
   * page loads, and the document looks unstyled for about a second,
   * because javascript sucks dick.
   */
  body, body.terran {
    --color-primary:          rgb(38, 192, 128);
    --color-secondary:        rgb(144, 198, 149);
    --color-primary-opacity:  rgba(38, 192, 128, .05);

    --color-bg-primary:       rgb(19, 19, 19);
    --color-bg-secondary:     rgb(13, 13, 13);
    --color-bg-screen:        rgb(30, 30, 30);

    --link-color:             rgb(202, 211, 200);

    --retro-border-color:     rgb(5, 5, 5);
    --retro-shadow:           -2.5px -2.5px var(--retro-border-color)
                              , 2.5px 2.5px var(--retro-border-color);
    --retro-shadow-active:    inset -1.5px -1.5px rgb(5, 5, 5)
                              , inset 2.5px 4px rgb(5, 5, 5);

    --screen-shadow:          rgba(0, 0, 0, .25);

    --neu-shadow-small:
      2px 2px 10px rgba(0, 0, 0, .65),
      -2px -2px 10px rgba(255, 255, 255, .085);
    --neu-shadow-small-active:
      inset 2px 2px 10px rgba(0, 0, 0, .65),
      inset -2px -2px 10px rgba(255, 255, 255, .086);
  }

  body.protoss {
    --color-primary:          rgb(231, 130, 89);
    --color-secondary:        rgb(231, 130, 89);
    --color-primary-opacity:  rgb(231, 130, 89, .1);

    --color-bg-primary:       rgb(248, 239, 186);
    --color-bg-secondary:     rgb(245, 215, 144);
    --color-bg-screen:        #f5d790;

    --link-color:             rgb(240, 147, 43);

    --retro-border-color:     rgb(255, 99, 72);
    --retro-shadow:           -2.5px -2.5px var(--retro-border-color)
                              , 2.5px 2.5px var(--retro-border-color);
    --retro-shadow-active:    inset -1.5px -1.5px rgb(255, 99, 72)
                              , inset 2.5px 4px rgb(255, 99, 72);

    --screen-shadow:          rgba(255, 255, 255, .05);

    --neu-shadow-small:
      -2px -2px 10px rgba(255, 255, 255, .5),
      2px 2px 10px rgba(185, 165, 52, .5),
      inset -2px -2px 10px rgba(255, 255, 255, .25),
      inset 2px 2px 10px rgba(223, 208, 119, .3);

    --neu-shadow-small-active:
      inset -2px -2px 10px rgba(255, 255, 255, .5),
      inset 2px 2px 10px rgba(185, 165, 52, .5);
  }
`;

export default RaceStyling;

