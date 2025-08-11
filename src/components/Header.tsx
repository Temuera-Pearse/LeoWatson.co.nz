import React from 'react'

const Header: React.FC = () => {
  return (
    <header
      className="text-center py-4 "
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="container mt-5">
        <h1 className="fw-bold mb-1">LEO WATSON BARRISTER AND SOLICITOR</h1>
        <hr className="mx-auto w-25" />
        <p className="text-uppercase small mt-2 fst-italic">
          · Specialising in Indigenous Law Solutions ·
        </p>
      </div>
    </header>
  )
}

export default Header
