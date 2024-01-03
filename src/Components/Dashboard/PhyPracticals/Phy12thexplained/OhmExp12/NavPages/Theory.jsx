import React from 'react'

const Theory = () => {
  return (
    <div className='w-4/5'>
      <div className="aim my-8">
        <p className="text-dark font-semibold text-xl mb-3">Aim</p>
        <p className="text-dark50 font-normal text-base pl-1">To determine the resistance per cm of a given wire by plotting a graph of potential <br /> difference versus current, and hence to determine its resistivity.</p>
      </div>

      <div className="theory mb-8">
        <p className="text-dark font-semibold text-xl mb-3">The Theory</p>
        <p className="text-dark50 font-normal text-base pl-1">What does Ohm's Law state? <br /> <br />

          According to the Ohm's law, "The current flowing through a conductor is directly proportional to the potential difference across its ends provided the physical conditions (temperature, dimensions, pressure) of the conductor remains the same." If I be the current flowing through a conductor and V be the potential difference across its ends, then according to Ohm's Law, <br /> <br />

          I = V <br />
          V = I or V = IR <br /><br />

          where, R is the constant of proportionality. It is known as resistance of the conductor. Or <br /><br />

          V/I = R &nbsp; &nbsp; &nbsp;    &nbsp;   the formula. <br /><br />

          R depends upon the material, temperature and dimensions of the conductor. <br /><br />

          In S.I. units, the potential difference V is measured in volt and the current I in ampere, the resistance R is measured in ohm. <br /><br />

          How do we establish the current-voltage relationship? <br /><br />

          To establish the current-voltage relationship, it is to be shown that the ratio V / I remains constant for a given resistance, therefore a graph between the potential difference(V) and the current (I) must be a straight line. <br /><br />

          How then do we find the unknown values of resistance? <br /><br />

          It is the constant ratio that gives the unknown values of resistance, <br /><br />

          V/I = R <br /><br />

          For a wire of uniform cross-section, the resistance depends on the length l and the area of cross-section A. It also depends on the temperature of the conductor. At a given temperature the resistance, <br /><br />


          R = p 1/A <br /><br />

          where ρ is the specific resistance or resistivity and is characteristic of the material of wire. <br /><br />

          Hence, the specific resistance or resistivity of the material of the wire, <br /><br />

          p = RA/1 <br /><br />

          If 'r' is the radius of the wire, then the cross sectional area, A = πr². Then the specific resistance or resistivity of the material of the wire is,
        </p>
      </div>

      <div className="objectives">
        <p className="text-dark font-semibold text-xl mb-3">Learning Objectives</p>
        <p className="text-dark50 font-normal text-base pl-1">
          ●  Students learn Ohm’s law. <br />
          ●  Students know the relation between voltage, current and resistance. <br />
          ●  Students learn how to find out the resistivity of the material  of a give wire. <br />
        </p>
      </div>
    </div>
  )
}

export default Theory