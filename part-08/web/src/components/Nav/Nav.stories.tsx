// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Nav from './Nav'

const meta: Meta<typeof Nav> = {
  component: Nav,
}

export default meta

type Story = StoryObj<typeof Nav>

export const Primary: Story = {
  render: () => {
    return (
      <>
        <Nav />
        <p>
          Id labore laboris mollit et nulla elit ut reprehenderit culpa ipsum
          occaecat mollit ut velit. Quis deserunt est ullamco sunt. Consequat
          cupidatat consectetur Lorem voluptate voluptate. Velit ad consequat
          cupidatat dolor. Exercitation occaecat incididunt commodo exercitation
          enim laboris magna voluptate proident. Deserunt nostrud commodo minim
          ea excepteur.
        </p>

        <p>
          Nisi eiusmod id do id eu et. Lorem laboris non irure nisi proident
          laboris pariatur fugiat id sunt cillum quis anim. Irure elit voluptate
          elit est adipisicing eu pariatur ut eu consequat tempor voluptate
          aliquip consectetur et. Dolore deserunt ad ullamco ad enim velit
          exercitation ad qui. Aliqua sunt occaecat occaecat ea occaecat Lorem
          sunt aliqua ea est eiusmod magna excepteur culpa Lorem. Magna et
          commodo voluptate ullamco.
        </p>

        <p>
          Et tempor irure labore nostrud ea dolore ex nisi nulla enim aliqua
          cupidatat. Aliquip velit enim mollit laboris esse sunt minim aliqua
          velit cillum cupidatat. Et do culpa velit esse esse anim laborum est
          occaecat labore enim amet id. Mollit occaecat id incididunt velit
          culpa ullamco eu consequat esse eiusmod duis voluptate. Laborum magna
          dolore quis minim proident anim. Reprehenderit Lorem exercitation ut
          sint nulla consectetur proident nisi eu dolor ad qui laborum esse. Do
          reprehenderit elit aute.
        </p>

        <p>
          Id adipisicing fugiat sunt velit laboris nisi in officia qui Lorem
          aute. Pariatur officia est in elit voluptate ea non laborum quis dolor
          esse. Occaecat in nisi magna commodo voluptate anim ipsum tempor.
          Velit tempor ea veniam cillum sunt.
        </p>

        <p>
          Culpa aliqua fugiat aute Lorem ad esse adipisicing laboris dolore
          consequat proident. Eiusmod cupidatat commodo cupidatat sunt proident
          minim do. Cillum labore fugiat laboris amet cillum culpa dolore sunt
          nisi. Deserunt Lorem nostrud pariatur dolore nulla voluptate non enim
          ullamco voluptate voluptate qui sunt pariatur irure. Aliquip fugiat
          aliqua amet minim duis cupidatat nostrud dolor adipisicing ullamco non
          fugiat ex pariatur. Velit est aute veniam cillum do voluptate ipsum
          irure eiusmod ad. Non adipisicing consectetur do. Ea enim eiusmod sint
          mollit ex minim deserunt commodo non est.
        </p>

        <p>
          Tempor fugiat ea magna cillum mollit ea culpa do reprehenderit nostrud
          proident nostrud veniam. Eu elit ad ex fugiat veniam est nisi. Anim
          non consequat laboris enim. Quis commodo non veniam laborum ea culpa
          irure. Quis occaecat id sit voluptate excepteur ex id ullamco cillum
          fugiat do. Anim id mollit laboris laborum nostrud cupidatat deserunt.
          Est esse id quis minim ut qui minim fugiat.
        </p>

        <p>
          Tempor sit velit sit laboris sunt dolor eu enim. Esse do officia duis
          ea sunt commodo enim consectetur labore Lorem. Laborum aute sit esse
          occaecat aliqua et non do ea ex nisi labore aliquip nisi. Ullamco aute
          ea aute ex nulla nostrud ullamco quis. Dolore dolor mollit Lorem
          fugiat laboris dolor. Fugiat proident sunt ullamco.
        </p>

        <p>
          Est ipsum sunt ex cupidatat officia id duis enim aliquip. Occaecat
          quis ad veniam consequat nostrud incididunt. Ut amet deserunt nisi
          cupidatat proident adipisicing aute laboris dolore amet ad et anim
          tempor. Nisi magna et velit officia velit proident officia veniam ut
          ullamco est et velit. Sit ex ex esse ipsum do reprehenderit id esse in
          dolore labore tempor. Sunt occaecat enim ex tempor aute ad ex in. Nisi
          nostrud occaecat ullamco sit voluptate anim Lorem ea do ex officia
          nisi enim sint occaecat.
        </p>

        <p>
          Lorem sint consequat voluptate ipsum do officia reprehenderit id in
          duis voluptate cillum. Consequat enim ad ea consectetur id dolore
          cillum non. Reprehenderit pariatur dolor et pariatur veniam. Ut irure
          do eu aliquip. Commodo consectetur excepteur exercitation officia
          cillum Lorem eiusmod id cillum sunt enim consectetur tempor. Do nisi
          et fugiat ut velit aliquip elit cupidatat ad cillum consequat labore.
          Nisi voluptate ad aute commodo culpa aliqua dolor pariatur nisi
          deserunt amet esse adipisicing et. Laborum incididunt quis magna
          excepteur reprehenderit pariatur cupidatat voluptate.
        </p>

        <p>
          Adipisicing commodo minim nulla cillum et velit adipisicing
          adipisicing. Aliqua aute nulla adipisicing occaecat id ad laborum non
          duis laboris incididunt qui irure. Ad aute nisi pariatur proident esse
          adipisicing fugiat cupidatat voluptate dolor aliqua nulla mollit duis.
          Veniam eiusmod exercitation reprehenderit ut ad. Nulla irure eiusmod
          adipisicing aliqua magna in ullamco eu reprehenderit cillum ipsum.
          Sunt Lorem irure esse incididunt ex dolor. Amet eu laborum enim ad
          nostrud aliquip non Lorem id quis cupidatat enim.
        </p>
      </>
    )
  },
}
