'use client';
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner';

const isValidAmazonProductUrl = (url:string) =>{
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;
        if(hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.endsWith('amazon')){
                return true;
            }
        else {
            return false;
        }
    } catch (error) {
        return false;
    }
    return false;
}
const Searchbar = () => {
    const [searchPrompt , setSearchPrompt] = useState('');
    const [isLoading , setIsLoading] = useState(false);

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) =>{
        event?.preventDefault();
        const isValidLink = isValidAmazonProductUrl(searchPrompt);
        if(!isValidLink){
            // return alert('not valid');
            toast.error('Please provide a valid Amazon link')
        }
        try {
            setIsLoading(true);
            const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
            
        


        
    }
  return (
    
    <form className='flex flex-wrap gap-4 mt-12' 
    onSubmit={handleSubmit}>
        <input type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder='Enter product link'
        className='searchbar-input' />
        <button 
        disabled={searchPrompt === ''}
        type="submit" className='searchbar-btn'
        >{isLoading ? 'Loading...' : 'Search' }</button>
    </form>
  )
}

export default Searchbar