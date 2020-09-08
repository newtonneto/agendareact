import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';

export default function PhoneMask() {
    $(".cellphone").mask("(00) 00000-0000");  
};