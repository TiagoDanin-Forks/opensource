import React from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'
import Button from '../../components/button'
import RepoStats from '../../components/repoStats'

import styles from './project.module.css'
import projectLogo from '../../images/logos/logo_megadraft.svg'

const ProjectPage = () => (
  <Layout
    renderTop={() => <TopBackground skyObject="rocket" />}
    renderBottom={() => (
      <div className={styles.sectionBottom}>
        <div className={styles.astronaut} />
      </div>
    )}
  >
    <section className={styles.section}>
      <div>
        <div className={styles.projectInfoTop}>
          <img
            className={styles.projectLogo}
            src={projectLogo}
            alt="Megadraft"
          />
          <div className={styles.projectRepoInfo}>
            <RepoStats stars={429} forks={82} commits={438} issues={13} />
            <div className={styles.projectRepoLinks}>
              <Button
                className={styles.projectRepoLink}
                label="ver repositório"
              />
              <Button className={styles.projectRepoLink} label="documentação" />
            </div>
          </div>
        </div>
        <p className={styles.projectDescription}>
          Megradraft is a Rich Text editor built on top of Facebook’s Draft.JS
          featuring a nice default base of components and extensibility. Good
          usability, nice default base of plugins and extensibility.
        </p>
        <a className={styles.projectLink} href="http://megadraft.io/">
          http://megadraft.io/
        </a>
      </div>
    </section>
  </Layout>
)

export default ProjectPage
