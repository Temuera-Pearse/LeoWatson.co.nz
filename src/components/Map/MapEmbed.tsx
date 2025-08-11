import React from 'react'

const MapEmbed: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="ratio ratio-16x9">
        <iframe
          title="Leo Watson Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.4840648864755!2d176.87696961524082!3d-39.514257579480206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d69db6a553f1701%3A0xe49063e37c8e8f3d!2s342%20Gloucester%20Street%2C%20Taradale%2C%20Napier%204112%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1719456000000!5m2!1sen!2snz"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default MapEmbed
