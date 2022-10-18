import React, { FC } from "react";
import { HandleModal } from "@features/ui";
import { useHandleModalShow } from "@features/ui/handle-modal/handle-modal-context";
import { Formik, Form, Field } from "formik";
import useMapSearchFilters from "./use-map-search-filters";
import { AreaUnitArray, PropertyTypeArray } from "@features/auctions/types/enums";

const MapSearchFilters: FC = () => {
  const { setIsModalShow } = useHandleModalShow();
  const { initialValues, validationSchema, filterAuctions } = useMapSearchFilters();

  return (
    <HandleModal
      Modal={
        <div className="fixed top-0 left-0 z-20 w-screen h-screen px-4">
          <Formik className="bg-black" initialValues={initialValues} onSubmit={filterAuctions}>
            <Form className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-center w-full px-4 py-16 rounded-md shadow-lg md:w-2/3 xl:w-1/2 bg-bg-primary">
                <div className="flex flex-wrap items-center justify-center gap-16">
                  <div>
                    <label htmlFor="">Cena</label>
                    <div>
                      <Field
                        type="number"
                        placeholder="Od"
                        className="from-to-input"
                        name="price.from"
                      />
                      <Field
                        type="number"
                        placeholder="Do"
                        className="mx-2 from-to-input"
                        name="price.to"
                      />
                      PLN
                    </div>
                  </div>
                  {/* <div>price type</div> */}
                  <div>
                    <label htmlFor="">Powiechnia</label>
                    <div className="flex gap-2">
                      <Field
                        className="from-to-input"
                        type="number"
                        placeholder="Od"
                        name="area.from"
                      />
                      <Field
                        className="from-to-input"
                        type="number"
                        placeholder="Do"
                        name="area.to"
                      />
                      <Field className="select-primary" as="select" name="area.unit">
                        <option value=""></option>
                        {AreaUnitArray.map((unit) => {
                          return (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">Typ nieruchomości</label>
                    <Field className="select-primary" as="select" name="type">
                      <option value=""></option>
                      {PropertyTypeArray.map((type) => {
                        return (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="">Liczba pokoi</label>
                    <div>
                      <Field
                        className="from-to-input"
                        type="number"
                        placeholder="Od"
                        name="rooms.from"
                      />
                      <Field
                        className="ml-2 from-to-input"
                        type="number"
                        placeholder="Do"
                        name="rooms.to"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">Piętro</label>
                    <div>
                      <Field
                        className="from-to-input"
                        type="number"
                        placeholder="Od"
                        name="level.from"
                      />
                      <Field
                        className="ml-2 from-to-input"
                        type="number"
                        placeholder="Do"
                        name="level.to"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">Opłaty</label>
                    <div>
                      <Field
                        className="from-to-input"
                        type="number"
                        placeholder="Od"
                        name="rent.from"
                      />
                      <Field
                        className="mx-2 from-to-input"
                        type="number"
                        placeholder="Do"
                        name="rent.to"
                      />
                      PLN
                    </div>
                  </div>
                </div>
                <div className="flex mt-8">
                  <button
                    type="button"
                    onClick={() => setIsModalShow(false)}
                    className="button-secondary"
                  >
                    Anuluj
                  </button>
                  <button type="reset" className="ml-4 button-secondary">
                    Zresetuj filtry
                  </button>
                  <button type="submit" className="ml-4 button-primary">
                    Zapisz filtry
                  </button>
                </div>
              </div>
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
