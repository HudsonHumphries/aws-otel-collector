/*
 * CLOUD API
 *
 * IONOS Enterprise-grade Infrastructure as a Service (IaaS) solutions can be managed through the Cloud API, in addition or as an alternative to the \"Data Center Designer\" (DCD) browser-based tool.    Both methods employ consistent concepts and features, deliver similar power and flexibility, and can be used to perform a multitude of management tasks, including adding servers, volumes, configuring networks, and so on.
 *
 * API version: 6.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ionoscloud

import (
	"encoding/json"
	"time"
)

// DatacenterElementMetadata struct for DatacenterElementMetadata
type DatacenterElementMetadata struct {
	// Resource's Entity Tag as defined in http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.11  Entity Tag is also added as an 'ETag response header to requests which don't use 'depth' parameter.
	Etag *string `json:"etag,omitempty"`
	// The last time the resource was created.
	CreatedDate *IonosTime
	// The user who created the resource.
	CreatedBy *string `json:"createdBy,omitempty"`
	// The unique ID of the user who created the resource.
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	// The last time the resource was modified.
	LastModifiedDate *IonosTime
	// The user who last modified the resource.
	LastModifiedBy *string `json:"lastModifiedBy,omitempty"`
	// The unique ID of the user who last modified the resource.
	LastModifiedByUserId *string `json:"lastModifiedByUserId,omitempty"`
	// State of the resource. *AVAILABLE* There are no pending modification requests for this item; *BUSY* There is at least one modification request pending and all following requests will be queued; *INACTIVE* Resource has been de-provisioned; *DEPLOYING* Resource state DEPLOYING - relevant for Kubernetes cluster/nodepool; *ACTIVE* Resource state ACTIVE - relevant for Kubernetes cluster/nodepool; *FAILED* Resource state FAILED - relevant for Kubernetes cluster/nodepool; *SUSPENDED* Resource state SUSPENDED - relevant for Kubernetes cluster/nodepool; *FAILED_SUSPENDED* Resource state FAILED_SUSPENDED - relevant for Kubernetes cluster; *UPDATING* Resource state UPDATING - relevant for Kubernetes cluster/nodepool; *FAILED_UPDATING* Resource state FAILED_UPDATING - relevant for Kubernetes cluster/nodepool; *DESTROYING* Resource state DESTROYING - relevant for Kubernetes cluster; *FAILED_DESTROYING* Resource state FAILED_DESTROYING - relevant for Kubernetes cluster/nodepool; *TERMINATED* Resource state TERMINATED - relevant for Kubernetes cluster/nodepool; *HIBERNATING* Resource state HIBERNATING - relevant for Kubernetes cluster/nodepool; *FAILED_HIBERNATING* Resource state FAILED_HIBERNATING - relevant for Kubernetes cluster/nodepool; *MAINTENANCE* Resource state MAINTENANCE - relevant for Kubernetes cluster/nodepool; *FAILED_HIBERNATING* Resource state FAILED_HIBERNATING - relevant for Kubernetes cluster/nodepool.
	State *string `json:"state,omitempty"`
}

// NewDatacenterElementMetadata instantiates a new DatacenterElementMetadata object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDatacenterElementMetadata() *DatacenterElementMetadata {
	this := DatacenterElementMetadata{}

	return &this
}

// NewDatacenterElementMetadataWithDefaults instantiates a new DatacenterElementMetadata object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDatacenterElementMetadataWithDefaults() *DatacenterElementMetadata {
	this := DatacenterElementMetadata{}
	return &this
}

// GetEtag returns the Etag field value
// If the value is explicit nil, the zero value for string will be returned
func (o *DatacenterElementMetadata) GetEtag() *string {
	if o == nil {
		return nil
	}

	return o.Etag

}

// GetEtagOk returns a tuple with the Etag field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetEtagOk() (*string, bool) {
	if o == nil {
		return nil, false
	}

	return o.Etag, true
}

// SetEtag sets field value
func (o *DatacenterElementMetadata) SetEtag(v string) {

	o.Etag = &v

}

// HasEtag returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasEtag() bool {
	if o != nil && o.Etag != nil {
		return true
	}

	return false
}

// GetCreatedDate returns the CreatedDate field value
// If the value is explicit nil, the zero value for time.Time will be returned
func (o *DatacenterElementMetadata) GetCreatedDate() *time.Time {
	if o == nil {
		return nil
	}

	if o.CreatedDate == nil {
		return nil
	}
	return &o.CreatedDate.Time

}

// GetCreatedDateOk returns a tuple with the CreatedDate field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetCreatedDateOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}

	if o.CreatedDate == nil {
		return nil, false
	}
	return &o.CreatedDate.Time, true

}

// SetCreatedDate sets field value
func (o *DatacenterElementMetadata) SetCreatedDate(v time.Time) {

	o.CreatedDate = &IonosTime{v}

}

// HasCreatedDate returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasCreatedDate() bool {
	if o != nil && o.CreatedDate != nil {
		return true
	}

	return false
}

// GetCreatedBy returns the CreatedBy field value
// If the value is explicit nil, the zero value for string will be returned
func (o *DatacenterElementMetadata) GetCreatedBy() *string {
	if o == nil {
		return nil
	}

	return o.CreatedBy

}

// GetCreatedByOk returns a tuple with the CreatedBy field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetCreatedByOk() (*string, bool) {
	if o == nil {
		return nil, false
	}

	return o.CreatedBy, true
}

// SetCreatedBy sets field value
func (o *DatacenterElementMetadata) SetCreatedBy(v string) {

	o.CreatedBy = &v

}

// HasCreatedBy returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasCreatedBy() bool {
	if o != nil && o.CreatedBy != nil {
		return true
	}

	return false
}

// GetCreatedByUserId returns the CreatedByUserId field value
// If the value is explicit nil, the zero value for string will be returned
func (o *DatacenterElementMetadata) GetCreatedByUserId() *string {
	if o == nil {
		return nil
	}

	return o.CreatedByUserId

}

// GetCreatedByUserIdOk returns a tuple with the CreatedByUserId field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetCreatedByUserIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}

	return o.CreatedByUserId, true
}

// SetCreatedByUserId sets field value
func (o *DatacenterElementMetadata) SetCreatedByUserId(v string) {

	o.CreatedByUserId = &v

}

// HasCreatedByUserId returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasCreatedByUserId() bool {
	if o != nil && o.CreatedByUserId != nil {
		return true
	}

	return false
}

// GetLastModifiedDate returns the LastModifiedDate field value
// If the value is explicit nil, the zero value for time.Time will be returned
func (o *DatacenterElementMetadata) GetLastModifiedDate() *time.Time {
	if o == nil {
		return nil
	}

	if o.LastModifiedDate == nil {
		return nil
	}
	return &o.LastModifiedDate.Time

}

// GetLastModifiedDateOk returns a tuple with the LastModifiedDate field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetLastModifiedDateOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}

	if o.LastModifiedDate == nil {
		return nil, false
	}
	return &o.LastModifiedDate.Time, true

}

// SetLastModifiedDate sets field value
func (o *DatacenterElementMetadata) SetLastModifiedDate(v time.Time) {

	o.LastModifiedDate = &IonosTime{v}

}

// HasLastModifiedDate returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasLastModifiedDate() bool {
	if o != nil && o.LastModifiedDate != nil {
		return true
	}

	return false
}

// GetLastModifiedBy returns the LastModifiedBy field value
// If the value is explicit nil, the zero value for string will be returned
func (o *DatacenterElementMetadata) GetLastModifiedBy() *string {
	if o == nil {
		return nil
	}

	return o.LastModifiedBy

}

// GetLastModifiedByOk returns a tuple with the LastModifiedBy field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetLastModifiedByOk() (*string, bool) {
	if o == nil {
		return nil, false
	}

	return o.LastModifiedBy, true
}

// SetLastModifiedBy sets field value
func (o *DatacenterElementMetadata) SetLastModifiedBy(v string) {

	o.LastModifiedBy = &v

}

// HasLastModifiedBy returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasLastModifiedBy() bool {
	if o != nil && o.LastModifiedBy != nil {
		return true
	}

	return false
}

// GetLastModifiedByUserId returns the LastModifiedByUserId field value
// If the value is explicit nil, the zero value for string will be returned
func (o *DatacenterElementMetadata) GetLastModifiedByUserId() *string {
	if o == nil {
		return nil
	}

	return o.LastModifiedByUserId

}

// GetLastModifiedByUserIdOk returns a tuple with the LastModifiedByUserId field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetLastModifiedByUserIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}

	return o.LastModifiedByUserId, true
}

// SetLastModifiedByUserId sets field value
func (o *DatacenterElementMetadata) SetLastModifiedByUserId(v string) {

	o.LastModifiedByUserId = &v

}

// HasLastModifiedByUserId returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasLastModifiedByUserId() bool {
	if o != nil && o.LastModifiedByUserId != nil {
		return true
	}

	return false
}

// GetState returns the State field value
// If the value is explicit nil, the zero value for string will be returned
func (o *DatacenterElementMetadata) GetState() *string {
	if o == nil {
		return nil
	}

	return o.State

}

// GetStateOk returns a tuple with the State field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *DatacenterElementMetadata) GetStateOk() (*string, bool) {
	if o == nil {
		return nil, false
	}

	return o.State, true
}

// SetState sets field value
func (o *DatacenterElementMetadata) SetState(v string) {

	o.State = &v

}

// HasState returns a boolean if a field has been set.
func (o *DatacenterElementMetadata) HasState() bool {
	if o != nil && o.State != nil {
		return true
	}

	return false
}

func (o DatacenterElementMetadata) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Etag != nil {
		toSerialize["etag"] = o.Etag
	}
	if o.CreatedDate != nil {
		toSerialize["createdDate"] = o.CreatedDate
	}
	if o.CreatedBy != nil {
		toSerialize["createdBy"] = o.CreatedBy
	}
	if o.CreatedByUserId != nil {
		toSerialize["createdByUserId"] = o.CreatedByUserId
	}
	if o.LastModifiedDate != nil {
		toSerialize["lastModifiedDate"] = o.LastModifiedDate
	}
	if o.LastModifiedBy != nil {
		toSerialize["lastModifiedBy"] = o.LastModifiedBy
	}
	if o.LastModifiedByUserId != nil {
		toSerialize["lastModifiedByUserId"] = o.LastModifiedByUserId
	}
	if o.State != nil {
		toSerialize["state"] = o.State
	}
	return json.Marshal(toSerialize)
}

type NullableDatacenterElementMetadata struct {
	value *DatacenterElementMetadata
	isSet bool
}

func (v NullableDatacenterElementMetadata) Get() *DatacenterElementMetadata {
	return v.value
}

func (v *NullableDatacenterElementMetadata) Set(val *DatacenterElementMetadata) {
	v.value = val
	v.isSet = true
}

func (v NullableDatacenterElementMetadata) IsSet() bool {
	return v.isSet
}

func (v *NullableDatacenterElementMetadata) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDatacenterElementMetadata(val *DatacenterElementMetadata) *NullableDatacenterElementMetadata {
	return &NullableDatacenterElementMetadata{value: val, isSet: true}
}

func (v NullableDatacenterElementMetadata) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDatacenterElementMetadata) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
