import React, { FC } from "react";
import { HandleModal } from "@features/ui";
import { useHandleModalShow } from "@features/ui/handle-modal/handle-modal-context";
import { Formik, Form, Field } from "formik";
import useMapSearchFilters from "./use-map-search-filters";
import { AreaUnitArray } from "@features/auctions/types/enums";

const MapSearchFilters: FC = () => {
  const { setIsModalShow } = useHandleModalShow();
  const { initialValues, validationSchema, filterAuctions } = useMapSearchFilters();

  return (
    <HandleModal
      Modal={
        <div className="fixed top-0 left-0 z-20 w-screen h-screen">
          <Formik initialValues={initialValues} onSubmit={filterAuctions}>
            <Form>
              <div>
                <Field type="number" placeholder="from" name="price.from" />
                <Field type="number" placeholder="area to" name="price.to" />
              </div>
              <div>price type</div>
              <div>
                <Field type="number" placeholder="area from" name="area.from" />
                <Field type="number" placeholder="area to" name="area.to" />
                <Field as='select' name='area.unit'>
                    <option value=''></option>
                  {
                    AreaUnitArray.map(unit => {
                      return (
                        <option key={unit} value={unit}>{unit}</option>
                      )
                    })
                  }
                </Field>
                area unit
                {/* <Field type='text' placeholder='from' name='area.unit' /> */}
              </div>
              <div>property type</div>
              <div>
                room
                <Field type="number" placeholder="from" name="rooms.from" />
                <Field type="number" placeholder="area to" name="rooms.to" />
              </div>
              <div>
                level
                <Field type="number" placeholder="from" name="level.from" />
                <Field type="number" placeholder="area to" name="level.to" />
              </div>
              <div>
                rent
                <Field type="number" placeholder="from" name="rent.from" />
                <Field type="number" placeholder="area to" name="rent.to" />
              </div>

              <button type="button" onClick={() => setIsModalShow(false)} className="button-secondary">
                Anuluj
              </button>
              <button type="submit" className="button-primary">
                Zapisz filtry
              </button>
            </Form>
          </Formik>
        </div>
      }
      Button={
        <button onClick={() => setIsModalShow(true)} className="button-secondary">
          Więcej filtrów
        </button>
      }
    />
  );
};

export default MapSearchFilters;
