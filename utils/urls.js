export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1338/'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_6CFA8CCC7EB07B41'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_live_6CFA8CCC7EB07B41'

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
};