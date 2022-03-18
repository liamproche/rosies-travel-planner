
import { Toast } from 'bootstrap.esm.min.js'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

Array.from(document.querySelectorAll('.toast'))
  .forEach(toastNode => new Toast(toastNode))
new WOW().init();