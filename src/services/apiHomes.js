import supabase, { supabaseUrl } from './supabase';
export async function getHome() {
  let { data: singer, error } = await supabase.from('singer').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  console.log('getSingers()', singer);
  return singer;
}
