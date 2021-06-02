import moment from 'moment'

export default function changeDateFormat (date:string){
  return moment(date).fromNow();
}