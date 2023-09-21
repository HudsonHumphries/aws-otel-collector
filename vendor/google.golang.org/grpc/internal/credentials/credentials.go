/*
 * Copyright 2021 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package credentials

import (
	"context"
)

// requestInfoKey is a struct to be used as the key to store RequestInfo in a
// context.
type requestInfoKey struct{}

// NewRequestInfoContext creates a context with ri.
<<<<<<< HEAD
func NewRequestInfoContext(ctx context.Context, ri interface{}) context.Context {
=======
func NewRequestInfoContext(ctx context.Context, ri any) context.Context {
>>>>>>> main
	return context.WithValue(ctx, requestInfoKey{}, ri)
}

// RequestInfoFromContext extracts the RequestInfo from ctx.
<<<<<<< HEAD
func RequestInfoFromContext(ctx context.Context) interface{} {
=======
func RequestInfoFromContext(ctx context.Context) any {
>>>>>>> main
	return ctx.Value(requestInfoKey{})
}

// clientHandshakeInfoKey is a struct used as the key to store
// ClientHandshakeInfo in a context.
type clientHandshakeInfoKey struct{}

// ClientHandshakeInfoFromContext extracts the ClientHandshakeInfo from ctx.
<<<<<<< HEAD
func ClientHandshakeInfoFromContext(ctx context.Context) interface{} {
=======
func ClientHandshakeInfoFromContext(ctx context.Context) any {
>>>>>>> main
	return ctx.Value(clientHandshakeInfoKey{})
}

// NewClientHandshakeInfoContext creates a context with chi.
<<<<<<< HEAD
func NewClientHandshakeInfoContext(ctx context.Context, chi interface{}) context.Context {
=======
func NewClientHandshakeInfoContext(ctx context.Context, chi any) context.Context {
>>>>>>> main
	return context.WithValue(ctx, clientHandshakeInfoKey{}, chi)
}
