import React from 'react'

export const AboutMe = () => (
  <div style={{ textAlign: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '60px' }}>
    <div>
      <img alt="" style={{ border: '10px solid #78b79c', borderRadius: '50%' }} src='/static/beth.jpeg' />
      <h3>bethgilomen.com</h3>
      <h3>github.com/gilomen2</h3>
    </div>
    <div>
      <img alt="" style={{ border: '10px solid #78b79c', borderRadius: '50%' }} src='/static/brian.png' />
      <h3>Brian</h3>
      <h3>@bigbunnybrian</h3>
    </div>
  </div>
)
