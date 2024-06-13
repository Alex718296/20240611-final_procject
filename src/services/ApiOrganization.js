import supabase from './supabase';

export async function getComingSoon() {
  let { data: movie_name, error } = await supabase
    .from('movie_name')
    .select('*')
    .eq('formatId', '3');

  if (error) {
    console.error(error);
    throw new Error('Coming Soon movies could not be loaded');
  }
  console.log('getComingSoon()', movie_name);
  return movie_name;
}

export async function getLatest() {
  let { data: movie_name, error } = await supabase
    .from('movie_name')
    .select('*')
    .eq('formatId', '4');

  if (error) {
    console.error(error);
    throw new Error('Latest movies could not be loaded');
  }
  console.log('getLatest()', movie_name);
  return movie_name;
}

export async function getMovie() {
  let { data: movie_name, error } = await supabase
    .from('movie_name')
    .select('*');

  if (error) {
    console.error(error);
    throw new Error('Movies could not be loaded');
  }
  console.log('getMovie()', movie_name);
  return movie_name;
}

export async function getPopular() {
  let { data: movie_name, error } = await supabase
    .from('movie_name')
    .select('*')
    .eq('formatId', '1');

  if (error) {
    console.error(error);
    throw new Error('Popular movies could not be loaded');
  }
  console.log('getPopular()', movie_name);
  return movie_name;
}

export async function getStaffPicks() {
  let { data: movie_name, error } = await supabase
    .from('movie_name')
    .select('*')
    .eq('formatId', '2');

  if (error) {
    console.error(error);
    throw new Error('Staff Picks could not be loaded');
  }
  console.log('getStaffPicks()', movie_name);
  return movie_name;
}

async function loadMovies() {
  try {
    const comingSoon = await getComingSoon();
    const latest = await getLatest();
    const movies = await getMovie();
    const popular = await getPopular();
    const staffPicks = await getStaffPicks();

    console.log('Coming Soon:', comingSoon);
    console.log('Latest:', latest);
    console.log('Movies:', movies);
    console.log('Popular:', popular);
    console.log('Staff Picks:', staffPicks);

    // 使用上述資料來更新頁面狀態
  } catch (error) {
    console.error('Error loading movies:', error);
  }
}

// 呼叫loadMovies來載入所有資料
loadMovies();
