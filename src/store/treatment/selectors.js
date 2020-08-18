export const getTreatments = state => state.treatment.treatments

export const getFilteredTreatments = state => {
  return state.treatments.filter(treatment => treatment.name === "waxing")
}