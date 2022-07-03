interface objectOfWorksInterface {
  HeaderOfWorks: string[]
  NameOfWork: string[]
  LinkToGithubOfWorks: string[]
  TextOfWorks: JSX.Element[]
  ImagesCount: string[]
}

const countOfImages = 4

const objectOfWorks: objectOfWorksInterface = {
  HeaderOfWorks: [
    'Museum', 
    'This site'
  ],
  NameOfWork: [
    'Museum',
    'ThisSite'
  ],
  LinkToGithubOfWorks: [
    'https://github.com/Alternatio/Museum',
    'https://github.com/Alternatio/alternatio'
  ],
  TextOfWorks: [
    <p>
      <span>{' '}⬤{' '}</span>
      The task was to make a website for the Vrubel Museum. 
      The work was completed in the early summer of 2022. <span>ReactTS</span> is used.
    </p>, 
    <p>
      <span>{' '}⬤{' '}</span>
      The work was completed in the early summer of 2022. 
      <span> ReactTS</span> and <span>Three</span> is used.
    </p>
  ],
  ImagesCount: []
}

for(let i = 0; i < countOfImages; i++) {
  objectOfWorks.ImagesCount.push('')
}

export default objectOfWorks