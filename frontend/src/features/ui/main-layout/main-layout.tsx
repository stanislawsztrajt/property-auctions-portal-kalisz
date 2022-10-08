import { ImapAuction } from '@features/auctions/types'
import MapSearchOptions from '@features/map/map-search-options'
import React, { ReactNode } from 'react'
import { FCC } from 'utils/types'

interface Props {
  children: ReactNode
  setAuctions: React.Dispatch<React.SetStateAction<ImapAuction[]>>
}

const MainLayout: FCC<Props> = ({ children, setAuctions }: Props) => {
  return(
    <>
      <section className='h-1/12'>
        <MapSearchOptions setAuctions={setAuctions} />
      </section>
      <section className='h-5/6'>
        <div className="h-full overflow-y-hidden">
          <div className="flex flex-row h-full">
            { children }
          </div>
        </div>
      </section>
    </>
    
    
  )
}

export default MainLayout
  