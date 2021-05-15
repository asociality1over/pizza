

export default function(props) {
    return(
        <button class="inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 p-5 md:mt-0 text-white shadow-xl">{props.text}
        {props.arrow ? 
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> : null}      
        </button>
      );
}