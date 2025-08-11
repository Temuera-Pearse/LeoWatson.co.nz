import React from 'react'

const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className=" align-items-center pt-5 justify-content-center text-white"
      style={{
        backgroundColor: '#2D3748', // Darker gray
        minHeight: '100vh',
      }}
    >
      <div className="container py-5 ">
        {/* Section 1 */}
        <h4 className="fw-semibold mb-3">Experienced litigator in:</h4>
        <ul>
          <li>Waitangi Tribunal, Māori Land Court, Māori Appellate Court</li>
          <li>
            Environment Court, Employment Relations Authority, Employment Court
          </li>
          <li>High Court of New Zealand, Court of Appeal of New Zealand</li>
        </ul>

        {/* Section 2 */}
        <h4 className="fw-semibold mt-5 mb-3">
          Represents a range of clients across the North Island, South Island,
          and Chatham Islands:
        </h4>
        <ul>
          <li>
            Taihape Waitangi Tribunal Inquiry (Wai 2180), Paparahi ki te Raki
            Inquiry (Wai 1040), Manawatu ki Porirua Inquiry (Wai 2200)
          </li>
          <li>
            Flora and Fauna / Intellectual Property (Wai 262), Radio Spectrum &
            Telecommunications Development (Wai 2224), Fisheries
          </li>
          <li>
            Ahu Whenua Trusts, Rūnanga, Māori Reservations Trustees, Local
            Government, Takutai Moana (Customary Marine Title)
          </li>
          <li>
            Public Works Act takings, Personal Grievances, Collective
            Bargaining, Farming and Forestry clients, Disciplinary Proceedings
          </li>
        </ul>

        {/* Section 3 */}
        <h4 className="fw-semibold mt-5 mb-3">Solutions focused:</h4>
        <ul>
          <li>
            Post-settlement governance entities, Commercial negotiations,
            Leases, Employment, Education and awareness
          </li>
          <li>
            Mandate issues, Māori and non-Māori business interface,
            International advocacy, Public speaking and workshops
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Expertise
