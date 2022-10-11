import React, { FC } from "react";
import { HandleModal } from "@features/ui";
import { useHandleModalShow } from "@features/ui/handle-modal/handle-modal-context";
import { Formik, Form } from 'formik'
import useMapSearchFilters from "./use-map-search-filters";


const MapSearchFilters: FC = () => {
  const { setIsModalShow } = useHandleModalShow()
  const { initialValues, validationSchema, filterAuctions } = useMapSearchFilters()

  if (!setIsModalShow) return <>Error modal show context</>

  return (
    <HandleModal
      Modal={
        <div className='fixed top-0 left-0 z-10 w-screen h-screen bg-black'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={filterAuctions}
          >
            <Form>
              <button onClick={() => setIsModalShow(false)} className='button-secondary'>Anuluj</button>
              <button onClick={() => setIsModalShow(false)} className='button-primary'>Zapisz filtry</button>
            </Form>
          </Formik>
        </div>
      }
      Button={
        <button onClick={() => setIsModalShow(true)} className='button-secondary'>Więcej filtrów</button>
      }
    />
  );
};

export default MapSearchFilters;
