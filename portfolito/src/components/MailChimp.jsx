import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from './NewsLetter';

function MailChimp() {
  //const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;


  return (
    <>
      <div className='mailchimp-design'>
        <MailchimpSubscribe
          //url={postUrl}
          render={({ subscribe, status, message }) => (
            <NewsLetter
              status={status}
              message={message}
              subscribe={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    </>
  )
}

export default MailChimp
