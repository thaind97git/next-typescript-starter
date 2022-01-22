function toVal(mix: any) {
  let k;
  let y;
  let str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          y = toVal(mix[k]);
          if (y) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

const clsx = (...args: any[]): string => {
  let i = 0;
  let tmp;
  let x;
  let str = '';

  while (i < args.length) {
    tmp = args[i++];
    if (tmp) {
      x = toVal(tmp);
      if (x) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
};

export default clsx;
