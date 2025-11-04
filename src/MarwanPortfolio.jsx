import React, { useEffect, useState } from 'react';

export default function MarwanPortfolio() {
  const [dark, setDark] = useState(false);

  const projects = [
    {
      title: 'Customer Segmentation Analysis',
      org: 'Banque Misr (2022)',
      meta: 'Clustering · Predictive Modeling',
      desc: 'Performed clustering-based segmentation on customer transaction data to identify behavioral patterns and improve personalized marketing strategy by 25%.',
      link: 'https://www.kaggle.com/code/marwanhatem/customer-segmentation-2022',
      year: '2022'
    },
    {
      title: 'Stock Price Prediction',
      org: 'Banque Misr (2022)',
      meta: 'Time Series · Regression',
      desc: 'Built regression models achieving 85% accuracy on multi-bank stock datasets using the Yahoo Finance API.',
      link: '',
      year: '2022'
    },
    {
      title: 'ATM Route Optimization',
      org: 'Banque Misr (2022)',
      meta: 'Graph Algorithms',
      desc: 'Developed shortest-path optimization algorithm to enhance ATM distribution efficiency across Egypt, reducing total route length.',
      link: '',
      year: '2022'
    },
    {
      title: 'Hit Song Prediction',
      org: 'Technocolabs (2022)',
      meta: 'Predictive Modeling',
      desc: "Forecasted song popularity using chorus repetition and audio features from the YouTube API.",
      link: '',
      year: '2022'
    },
    {
      title: 'Portuguese Bank Marketing',
      org: 'Kaggle (2024)',
      meta: 'Classification · 95% accuracy',
      desc: 'Performed EDA and built XGBoost models with SMOTE to address imbalance, achieving 95% test accuracy.',
      link: 'https://www.kaggle.com/code/mohamedhamdy2/portuguese-bank-marketing-eda-modeling-95-acc',
      year: '2024'
    },
    {
      title: 'E-Commerce Customer Churn',
      org: 'Kaggle (2024)',
      meta: 'End-to-end ML Pipeline · 20% churn reduction',
      desc: 'Built a full ML pipeline to predict and reduce customer churn; feature engineering and deployment contributed to a 20% reduction in churn metrics.',
      link: 'https://www.kaggle.com/code/amrabdelatyfathalla/e-commerce-customer-churn-end-to-end-ml-project',
      year: '2024'
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('site-dark');
    if (saved === '1') setDark(true);

    const onScroll = () => {
      const sc = window.scrollY;
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach((el, idx) => {
        const speed = (idx + 1) * 0.15;
        el.style.transform = `translateY(${sc * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('site-dark', dark ? '1' : '0');
    document.documentElement.style.setProperty('--bg', dark ? '#0b1020' : '#f7fafc');
    document.documentElement.style.setProperty('--card', dark ? '#0f1724' : '#ffffff');
    document.documentElement.style.setProperty('--text', dark ? '#e2e8f0' : '#0f172a');
    document.documentElement.style.setProperty('--muted', dark ? '#9fb0c9' : '#475569');
    document.documentElement.style.setProperty('--accent', dark ? '#22d3ee' : '#2563EB');
  }, [dark]);

  return (
    <div style={{ background: dark ? '#0b1020' : '#f7fafc', color: dark ? '#e2e8f0' : '#0f172a', minHeight: '100vh' }}>
      <main style={{position:'relative',zIndex:2}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'48px 20px'}}>
          <section id="projects" style={{marginBottom:36}}>
            <h2 style={{fontSize:20,fontWeight:700,marginBottom:12}}>Selected & Kaggle Projects</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:16}}>
              {projects.map((p, i) => (
                <article key={i} style={{padding:18,borderRadius:12,background:'var(--card)',boxShadow:'0 8px 28px rgba(2,6,23,0.06)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontSize:12,color:'var(--muted)'}}>{p.org} • {p.year}</div>
                    <h3 style={{margin:'8px 0',fontSize:16,fontWeight:800,color:'var(--text)'}}>{p.title}</h3>
                    <p style={{margin:0,color:'var(--muted)',fontSize:14}}>{p.desc}</p>
                  </div>
                  {p.link && (
                    <div style={{display:'flex',justifyContent:'flex-end',marginTop:12}}>
                      <a href={p.link} target="_blank" rel="noreferrer" style={{color:'var(--accent)',fontWeight:700,textDecoration:'none'}}>View Notebook →</a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
